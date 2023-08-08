import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Account() {
  const {
    control,
   
    formState: { errors },
  } = useForm({ mode: "all" });
const handleSubmit=(e)=>{
    // e.preventDafult();
    e.preventDefault();
    const submit_btn=e.target.birthdate.value;
    console.log(submit_btn);
}
  return (
    <div className="flex flex-col mx-5 my-2 space-y-2 bg-danger">
        
        <form onSubmit={(e)=>handleSubmit(e)}>
        <Controller
        control={control}
        name="birthdate"
        render={({ field }) => (
          <DatePicker
            className="birthdate border-2 border-pink-300 placeholder-gray-500 rounded-2xl w-full h-12 p-5 outline-none"
            name="birthdate"
            placeholderText="Birthdate"
            selected={field.value}
            dateFormat="yyyy-MM-dd"
            onChange={field.onChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            closeOnScroll={true}
            disabledKeyboardNavigation
          />
        )}
      />
        {errors.birthdate && (
            <p className="text-red-600 text-sm cursor-default">
            {errors.birthdate.message}
          </p>
        )}
        <button type="submit">button</button>
        </form>
    
    </div>
  )
}

export default Account