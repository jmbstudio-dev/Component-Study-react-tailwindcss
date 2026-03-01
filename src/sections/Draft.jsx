const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "johmelburgos@gmail.com",
    href: "mailto:johmelburgos@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 950 072 9743",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: "#",
  },
];

{
  /* CARD2 */
}
<div className="space-y-6 animate-fade-in animate-delay-400">
  {/*  */}

  {/* CARD2 */}
  <div className="glass rounded-3xl p-8 border border-primary/30">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      <span className="font-medium">Currently Available</span>
    </div>
    <p className="text-muted-foreground text-sm">
      I’m open to new opportunities where I can continue learning, improve my
      skills, and contribute to a development team. let's talk!
    </p>
  </div>

  <div className="glass rounded-3xl p-8">
    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
    <div className="space-y-4">
      {contactInfo.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
            <div className="font-medium">{item.value}</div>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>;
