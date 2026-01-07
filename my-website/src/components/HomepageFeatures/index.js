import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'From Theory to Practice',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This book provides a comprehensive guide to the fundamental principles
        of physical AI, from theoretical concepts to practical implementation
        in real-world robotic systems.
      </>
    ),
  },
  {
    title: 'Hands-On Learning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn by doing with practical examples and hands-on projects that will
        guide you through the process of building and programming intelligent
        robots.
      </>
    ),
  },
  {
    title: 'Built on Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explore the world of robotics with open-source tools and technologies
        like ROS 2, and learn how to contribute to the growing community of
        robotics enthusiasts.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
