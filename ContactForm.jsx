import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    console.log("Form data:", data);
    alert("Thanks! Your form has been submitted (simulated).");
  };

  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Contact / Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
          <input {...register("name", { required: true })} placeholder="Full name" className="p-3 border rounded" aria-label="Full name"/>
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="p-3 border rounded" aria-label="Email"/>
          {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}

          <select {...register("interest")} className="p-3 border rounded" aria-label="Interest">
            <option value="program">Program</option>
            <option value="volunteer">Volunteer</option>
            <option value="donate">Donate</option>
          </select>

          <textarea {...register("message")} rows={4} placeholder="Message" className="p-3 border rounded" aria-label="Message"></textarea>

          <div>
            <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Submit</button>
          </div>
          {isSubmitSuccessful && <div className="text-green-600">Submitted successfully (simulated)</div>}
        </form>
      </div>
    </section>
  )
}
