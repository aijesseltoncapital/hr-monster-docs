import type React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import type { JSX } from "react/jsx-runtime"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/monster.svg").default,
    description: (
      <>
        HRMonster was designed from the ground up to be easily installed and used to get your HR processes up and
        running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/monster.svg").default,
    description: (
      <>
        HRMonster lets you focus on your people, and we&apos;ll do the chores. Go ahead and move your HR operations into
        the modern era.
      </>
    ),
  },
  {
    title: "Powered by Modern Technology",
    Svg: require("@site/static/img/monster.svg").default,
    description: (
      <>
        Built with cutting-edge technology stack including React, Next.js, and modern cloud infrastructure for
        reliability and performance.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Why Choose HRMonster?</h2>
          <p className={styles.featuresSubtitle}>
            Streamline your HR operations with our comprehensive platform designed for modern workplaces
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
