"use client";
import SmallHeader from "@/components/SmallHeader";
import Image from "next/image";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

type Status = "idle" | "submitting" | "success";

const validate = (form: FormState): FormErrors => {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
};

const inputCls =
  "outline-none placeholder:text-white/30 bg-transparent border-b border-white/15 focus:border-white/40 pb-2 transition-colors duration-200 text-sm md:text-base";

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="contactWrapper min-h-[100dvh] flex-1 flex flex-col xl:flex-row">
        <div className="flex-1 h-full min-h-[200px] relative border-r border-white/15 overflow-hidden">
          <Image
            src="/projects/staircase.jpg"
            alt="Interior staircase"
            fill
            className="object-cover blur-[8px] opacity-50 scale-105"
          />
        </div>
        <div className="flex-1 h-full flex flex-col">
          <div className="flex flex-col justify-center items-center xl:items-start flex-1 max-md:px-5 max-md:py-10 p-12 xl:max-w-[720px]">
            {status === "success" ? (
              <div className="flex flex-col gap-4 max-w-[480px]">
                <h2 className="font-semibold">Message Sent!</h2>
                <span className="leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch with you
                  shortly.
                </span>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setStatus("idle");
                  }}
                  className="self-start text-sm text-white/40 hover:text-white/70 transition-colors duration-200 mt-2"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8 w-full max-w-[520px]">
                <div className="flex flex-col leading-none gap-2">
                  <h2 className="font-semibold">Contact Us</h2>
                  <span>Feel free to ask for help</span>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls}
                    />
                    {errors.name && (
                      <span className="!text-red-400 !text-xs">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputCls}
                    />
                    {errors.email && (
                      <span className="!text-red-400 !text-xs">{errors.email}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Leave your message"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputCls} resize-none`}
                    />
                    {errors.message && (
                      <span className="!text-red-400 !text-xs">{errors.message}</span>
                    )}
                  </div>
                  <PrimaryButton type="submit" className="self-start">
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </PrimaryButton>
                </form>
              </div>
            )}
          </div>
          <SmallHeader />
        </div>
      </div>
    </div>
  );
};

export default Contact;
