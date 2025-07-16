import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import HomepageHeader from "@site/src/components/HomepageHeader"

import styles from "./index.module.css"
import { JSX } from "react"

function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "HRMonster has completely transformed how we manage our HR processes. The intuitive interface and powerful features have saved us countless hours.",
      author: "Sarah Johnson",
      role: "HR Director at TechCorp",
      avatar: "SJ",
    },
    {
      content:
        "The payroll automation and employee self-service features are game-changers. Our team can focus on strategic initiatives instead of administrative tasks.",
      author: "Michael Chen",
      role: "People Operations Manager at StartupXYZ",
      avatar: "MC",
    },
    {
      content:
        "Implementation was seamless and the support team is exceptional. HRMonster scales perfectly with our growing organization.",
      author: "Emily Rodriguez",
      role: "Chief People Officer at GrowthCo",
      avatar: "ER",
    },
  ]

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trusted by HR Teams Worldwide</h2>
          <p className={styles.sectionSubtitle}>See what HR professionals are saying about HRMonster</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p>"{testimonial.content}"</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{testimonial.avatar}</div>
                  <div>
                    <div className={styles.testimonialName}>{testimonial.author}</div>
                    <div className={styles.testimonialRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your HR?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of companies using HRMonster to streamline their HR operations and empower their teams.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={clsx(styles.ctaButton, styles.ctaPrimaryButton)} to="https://dev.hr.monster/en/register">
              <span>Start Free Trial</span>
              <svg className={styles.ctaButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link className={clsx(styles.ctaButton, styles.ctaSecondaryButton)} to="https://dev.hr.monster/en/#waitlist">
              <span>Join the Waitlist</span>
              <svg className={styles.ctaButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Comprehensive documentation for HRMonster - Modern HR management for the digital workplace"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TestimonialsSection />
        <CTASection />
      </main>
    </Layout>
  )
}
