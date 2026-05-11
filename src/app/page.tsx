"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Products",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="ShopCommerce"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars"}}
      title="Modern Shopping, Perfected."
      description="Discover curated collections and premium items designed for your modern lifestyle. Elevate your shopping experience today."
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-view-modern-spiral-staircase-lights_181624-26451.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Quality at Every Detail"
      description={[
        "At ShopCommerce, we believe in providing products that blend form and function seamlessly.",        "Our team hand-picks every item to ensure excellence in quality, aesthetics, and utility.",        "We prioritize sustainability and modern craftsmanship in every partnership we make."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Free Shipping",          description: "Free delivery on all orders over $50 across the country.",          imageSrc: "http://img.b2bpic.net/free-photo/modern-gym-composition-with-sport-elements_23-2147913642.jpg",          imageAlt: "Shipping"},
        {
          title: "24/7 Support",          description: "Our support team is always available to help with any inquiries.",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-minimalist-lifestyle_23-2149743895.jpg",          imageAlt: "Support"},
        {
          title: "Easy Returns",          description: "100% satisfaction guaranteed with our hassle-free return policy.",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-ffp2-masks-shopping-carts-arrangement_23-2149366751.jpg",          imageAlt: "Returns"},
      ]}
      title="Why Choose Us?"
      description="We offer a curated experience centered around your needs and satisfaction."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Modern Desk Lamp",          price: "$89",          variant: "Premium",          imageSrc: "http://img.b2bpic.net/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074252.jpg"},
        {
          id: "p2",          name: "Minimalist Watch",          price: "$120",          variant: "Luxury",          imageSrc: "http://img.b2bpic.net/free-photo/blossoms-colorful-backdrops_23-2151916651.jpg"},
        {
          id: "p3",          name: "Ceramic Vase Set",          price: "$45",          variant: "Home",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-eucalyptus-plant_23-2149200302.jpg"},
        {
          id: "p4",          name: "Canvas Backpack",          price: "$75",          variant: "Active",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-plants-decoration-vase_23-2149334649.jpg"},
        {
          id: "p5",          name: "Wireless Audio Hub",          price: "$199",          variant: "Tech",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-minimal-plant-front-view_23-2148835357.jpg"},
        {
          id: "p6",          name: "Cotton Throw Blanket",          price: "$60",          variant: "Home",          imageSrc: "http://img.b2bpic.net/free-photo/sphere-representing-iris-eye_23-2151642923.jpg"},
      ]}
      title="Featured Collections"
      description="Explore our latest arrivals and timeless classics."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Essential",          price: "$0/mo",          subtitle: "Essential shopping perks",          buttons: [
            {
              text: "Sign Up"},
          ],
          features: [
            "Regular delivery",            "Basic support"],
        },
        {
          id: "premium",          badge: "Premium",          price: "$15/mo",          subtitle: "Best value",          buttons: [
            {
              text: "Start Trial"},
          ],
          features: [
            "Free shipping",            "Early access to sales",            "24/7 priority support"],
        },
        {
          id: "gold",          badge: "Gold",          price: "$30/mo",          subtitle: "VIP access",          buttons: [
            {
              text: "Go Gold"},
          ],
          features: [
            "Same day delivery",            "Concierge support",            "Exclusive partner perks"],
        },
      ]}
      title="Membership Perks"
      description="Get more out of ShopCommerce with our premium membership plans."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          role: "Designer",          company: "CreativeCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/extreme-close-up-woman-sharing-latest-developments-ai-big-data_482257-106960.jpg"},
        {
          id: "t2",          name: "Michael B.",          role: "Manager",          company: "StartupLab",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-posing_23-2148506477.jpg"},
        {
          id: "t3",          name: "Emily R.",          role: "Director",          company: "GrowthCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg"},
        {
          id: "t4",          name: "David K.",          role: "Engineer",          company: "TechGroup",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-people-working-together_23-2150384864.jpg"},
        {
          id: "t5",          name: "Laura M.",          role: "Consultant",          company: "BizService",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-point-finger-you_93675-135553.jpg"},
      ]}
      title="What Our Customers Say"
      description="Trusted by thousands for quality and service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "What is the return policy?",          content: "You can return items within 30 days of purchase for a full refund."},
        {
          id: "f2",          title: "How do I track my order?",          content: "Once your order ships, we'll send you an email with a tracking number."},
        {
          id: "f3",          title: "Do you offer international shipping?",          content: "Currently, we only ship domestically, but we are expanding to new regions."},
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      tag="Join Us"
      title="Get Our Latest Updates"
      description="Sign up for our newsletter to get the best deals and new product alerts delivered directly to your inbox."
      imageSrc="http://img.b2bpic.net/free-photo/office-desktop-with-coffee-cup-cookies_23-2148166793.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Products",              href: "#products"},
          ],
        },
        {
          items: [
            {
              label: "Support",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Twitter",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
      ]}
      logoText="ShopCommerce"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}