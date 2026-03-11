import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  CopyCheck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "johmelburgos@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+69 950 072 9743",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Laguna, Philippines",
  },
];

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      const currentTime = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          err?.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyText = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => setCopiedIndex(null), 1500);
  };


  return (
    <section id="contacts" className="py-32 relative overflow-hidden">
      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-2xl font-regular tracking-wider uppercase animate-fade-in animate-delay-100">
            Let's <span className="text-foreground">Connect</span>
          </span>
          {/* <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Open to opportunities and{" "}
            <span className="font-regular italic font-normal text-white">
              continuous learning.
            </span>
          </h2> */}
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            If you'd like to connect or discuss a role, feel free to reach out.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animate-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-400">
            {/* */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => copyText(item.value, i)}
                    className="w-full flex items-center gap-4 p-2 rounded-xl hover:bg-surface transition-colors group text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 
                    flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="break-all">{item.value}</div>
                    </div>

                    {/* Copy icon */}
                    {copiedIndex === i ? (
                      <CopyCheck className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
