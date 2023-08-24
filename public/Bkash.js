
// import React, { useState, useEffect } from 'react'

var paymentID = '';
    var random_value = Math.floor((Math.random() * 100000) + 1);

    
        bKash.init({
            paymentMode: 'checkout', //fixed value Ã¢â‚¬ËœcheckoutÃ¢â‚¬â„¢
            //paymentRequest format: {amount: AMOUNT, intent: INTENT}
            //intent options
            //1) 'sale' - immediate transaction (2 API calls)
            //2) 'authorization' - deferred transaction (3 API calls)
    
            paymentRequest: {
                amount: 0.00, //max two decimal points allowed
                intent: 'sale',
                merchantInvoiceNumber: sessionStorage.getItem("u_id"), // Its our dynamic form number
            },
            createRequest: function(request) { //request object is basically the paymentRequest object, automatically pushed by the script in createRequest method
            /* request['amount'] = document.getElementById("tk").value;*/
    
                let Amount=document.getElementById("tk").value;
                console.log(Amount);
    
                request['amount']=Amount;
                console.log('amount = ', request['amount']);
    
                if (request['amount']<0){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'For admission you have to pay 1st installment(7000TK).',
                        showConfirmButton: false,
                        showDenyButton: true,
                        denyButtonText: `ok`,
                        timer:5000
                    });
                    window.setTimeout(function () {
                        window.location.reload();
                    }, 5200);
                }else {
                    $.ajax({
                        // url: 'https://arenawebsecurity.net/bkash/payment/create/',
                        url: 'http://192.168.0.119:8000/bkash/payment/create/',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(request),
                        success: function (data) {
                            console.log(data);
                            //data = JSON.parse(data);
                            if (data && data.paymentID != null) {
                                paymentID = data.paymentID;
                                bKash.create().onSuccess(data); //pass the whole response data in bKash.create().onSucess() method as a parameter
                                console.log(data)
                                window.location.href ='/paymentSuccess'
                            } else {
                                // alert("Payment Failed ", JSON.stringify(data.errorMessage))
                                Swal.fire("Payment Failed ", JSON.stringify(data.errorMessage));
                                bKash.create().onError();
                            }
                        },
                        error: function () {
                            Swal.fire("Payment Failed ", JSON.stringify(data.errorMessage));
                            bKash.create().onError();
                        }
                    });
                }
            },
    
            executeRequestOnAuthorization: function() {
                var Email = localStorage.getItem("UserEmail");
                var Type =  localStorage.getItem("Type");
                var Course_title =  localStorage.getItem("Course_title");
                $.ajax({
                    url: 'http://192.168.0.119:8000/bkash/payment/execute/?email='+ Email + "&type=" + Type + "&title=" + Course_title,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "paymentID": paymentID
                    }),
                    success: function(data) {
                        //data = JSON.parse(data);
                        if (data && data.paymentID != null) {
                            // window.location.href = "/paymentSuccess"; //MerchantÃ¢â‚¬â„¢s success page
                            Swal.fire("Payment Success! Insufficient Balance");
                        } else {
                            if(data.errorCode == 2023){
                                Swal.fire("Payment Failed ! Insufficient Balance");
                               // alert("Payment Failed ! Insufficient Balance");
                            }else if(data.errorCode == 2029){
                                Swal.fire("Payment Failed ! Duplicate for All Transactions");
                                //alert("Payment Failed ! Duplicate for All Transactions");
                            }
                            bKash.execute().onError();
                        }
                    },
                    error: function() {
                        Swal.fire("Payment Failed errorFunction");
                       // alert("Payment Failed errorFunction")
                        bKash.execute().onError();
                    }
                });
            }
        });
    
