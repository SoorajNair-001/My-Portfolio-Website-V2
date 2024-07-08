"use client";
import React, { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          My inbox is always open, whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div>
          <div className="flex justify-start">
            <Image src="/address-icon.png" alt="Github Icon" width="45" height="45" className="py-3" />
            <div className="flex mt-5 ml-2"> St.John's, NL, Canada</div>
          </div>
          <div className="flex justify-start">
            <Image src="/email-icon.png" alt="Github Icon" width="45" height="45" className="py-3"/>
            <div className="flex mt-5 ml-2"> soorajnair2001@gmail.com</div>
          </div>
        </div>
      </div>
      <div>
        <FormfacadeEmbed

            formFacadeURL="https://formfacade.com/include/107076393172578034678/form/1FAIpQLSdT2j_jVDfjdnF3Pjw0RCWToc5EnNMbo1kg_JslMConyiKLvA/classic.js/?div=ff-compose"

            onSubmitForm={() => console.log('Form submitted')}

        />
      </div>
    </section>
  );
};

export default EmailSection;
