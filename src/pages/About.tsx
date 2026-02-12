import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold">Crafting Order with <span className="text-primary italic">Grace</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that the tools used to organize documents should reflect professionalism, reliability, and attention to detail. At Sree Files, every product is crafted to meet modern business needs while maintaining a refined and premium finish.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold font-serif text-primary">10k+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Clients Worldwide</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold font-serif text-primary">150+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Unique Designs</p>
              </div>
            </div>
          </div>
          <div className="relative animate-in zoom-in duration-1000">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="images/about.jpg"
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block">
              <h4 className="font-serif font-bold text-xl mb-2">Quality First</h4>
              <p className="text-sm text-muted-foreground">Every file goes through a 12-point quality check.</p>
            </div> */}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-secondary/30 p-12 rounded-3xl border border-primary/10">
            <h3 className="text-3xl font-serif font-bold mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the global benchmark for luxury organizational products, where innovation meets traditional craftsmanship 
              to create a harmonious workspace for professionals across all industries.
            </p>
          </div>
          <div className="bg-primary p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              We strive to empower individuals and businesses by providing elegantly designed, premium-quality file 
              solutions that inspire creativity and enhance productivity through seamless organization.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honesty and transparency in every business interaction." },
              { icon: Users, title: "Community", desc: "Supporting our local artisans and growing together." },
              { icon: Award, title: "Excellence", desc: "Striving for perfection in every stitch and fold." },
              { icon: Heart, title: "Passion", desc: "Loving what we do and showing it in our work." }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mx-auto">
                  <value.icon size={24} />
                </div>
                <h4 className="font-bold font-serif text-xl">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
