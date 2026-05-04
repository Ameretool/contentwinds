import { Layout } from "@/components/Layout";
import { siteConfig } from "@/config/site";

const About = () => (
  <Layout>
    <h1 className="text-3xl font-bold">About</h1>
    <p className="text-muted-foreground mt-3">
      {siteConfig.name} is a personal site for blog posts, microblogs and ideas.
      Built with React, TypeScript and Tailwind, inspired by the Content Wind theme.
    </p>
    <p className="mt-4">
      Reach out at <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a>.
    </p>
  </Layout>
);

export default About;
