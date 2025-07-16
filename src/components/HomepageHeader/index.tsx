import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./styles.module.css"

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.heroShape1}></div>
        <div className={styles.heroShape2}></div>
        <div className={styles.heroShape3}></div>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>{siteConfig.title}</span>
            </h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Comprehensive documentation and guides to help you get the most out of HRMonster. From quick start guides
              to advanced integrations, everything you need is here.
            </p>
          </div>
          <div className={styles.heroActions}>
            <Link className={clsx("button button--lg", styles.heroButton, styles.heroPrimaryButton)} to="/docs/intro">
              <span>Get Started</span>
              <svg className={styles.heroButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link className={clsx("button button--lg", styles.heroButton, styles.heroSecondaryButton)} to="/docs/api/authentication">
              <span>API Reference</span>
              <svg className={styles.heroButtonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>50K+</div>
              <div className={styles.heroStatLabel}>Employees Managed</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>1000+</div>
              <div className={styles.heroStatLabel}>Companies</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNumber}>99.9%</div>
              <div className={styles.heroStatLabel}>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
