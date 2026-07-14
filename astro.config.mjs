// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Grid',
        teaser: 'storyblok/Grid',
        hero: 'storyblok/Hero',
        about_section: 'storyblok/AboutSection',
        services_section: 'storyblok/ServicesSection',
        service_item: 'storyblok/ServiceItem',
        service_items: 'storyblok/ServiceItem',
        brands_section: 'storyblok/BrandsSection',
        brands_sections: 'storyblok/BrandsSection',
        brand_item: 'storyblok/BrandItem',
        testimonials_section: 'storyblok/TestimonialsSection',
        testimonial_item: 'storyblok/TestimonialItem',
        faq_section: 'storyblok/FaqSection',
        faq_item: 'storyblok/FaqItem',
        contact_form: 'storyblok/ContactForm',
      },
    }),
  ],
});