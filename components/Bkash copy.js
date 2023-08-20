import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery';

function BkashPayment() {
  let paymentID = '';

  useEffect(() => {
    bKash.init({
      paymentMode: 'checkout',
      paymentRequest: {
        amount: 0.00,
        intent: 'sale',
        merchantInvoiceNumber: sessionStorage.getItem('u_id'),
      },
      createRequest: function (request) {
        let Amount = document.getElementById('tk').value;

        request['amount'] = Amount;

        if (request['amount'] < 500) {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'For admission, you have to pay the 1st installment (7000TK).',
            showConfirmButton: false,
            showDenyButton: true,
            denyButtonText: 'OK',
            timer: 5000,
          });
          setTimeout(function () {
            window.location.reload();
          }, 5200);
        } else {
          $.ajax({
            url: 'https://arenawebsecurity.net/admission-api/bkash/payment/create/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(request),
            success: function (data) {
              if (data && data.paymentID != null) {
                paymentID = data.paymentID;
                bKash.create().onSuccess(data);
                console.log(data);
              } else {
                Swal.fire('Payment Failed', JSON.stringify(data.errorMessage));
                bKash.create().onError();
              }
            },
            error: function () {
              Swal.fire('Payment Failed', JSON.stringify(data.errorMessage));
              bKash.create().onError();
            },
          });
        }
      },

      executeRequestOnAuthorization: function () {
        var Email = localStorage.getItem('UserEmail');
        var Type = localStorage.getItem('Type');
        var Course_title = localStorage.getItem('Course_title');
        $.ajax({
          url: `https://arenawebsecurity.net/admission-api/bkash/payment/execute/?email=${Email}&type=${Type}&title=${Course_title}`,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            paymentID: paymentID,
          }),
          success: function (data) {
            if (data && data.paymentID != null) {
              window.location.href = '/paymentSuccess';
            } else {
              if (data.errorCode == 2023) {
                Swal.fire('Payment Failed! Insufficient Balance');
              } else if (data.errorCode == 2029) {
                Swal.fire('Payment Failed! Duplicate for All Transactions');
              }
              bKash.execute().onError();
            }
          },
          error: function () {
            Swal.fire('Payment Failed errorFunction');
            bKash.execute().onError();
          },
        });
      },
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      {/* Your component's JSX content here */}
    </div>
  );
}

export default BkashPayment;
