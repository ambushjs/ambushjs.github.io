import React from 'react';

const FeatureList = [
    {
        title: 'Prioritizes Performance',
        image: '/img/speedometer.svg',
        description: (
            <>
                Ambush has been crafted to deliver exceptional speed and responsiveness
                making it an ideal choice for developers seeking efficient solutions for
                their Node.js applications.
            </>
        ),
    },
    {
        title: 'Enchance Development',
        image: '/img/enchance.svg',
        description: (
            <>
                As well as providing performance-based utilities, Ambush is also tailored
                to enchance and elevate your development experience.
            </>
        ),
    },
    {
        title: 'Lean and Efficient',
        image: '/img/efficient.svg',
        description: (
            <>
                Ambush is dedicated to maintaining a development environment, where
                every effort is geared towards optimizing productivity and
                streamlining processes.
            </>
        ),
    },
];

function Feature({ image, title, description }) {
    return (
        <div className="col col--4">
            <div className="text--center">
                <img className="w-[180px]" src={image}></img>
            </div>
            <div className="text--center padding-horiz--md">
                <h1 style={{ fontSize: '1.25rem' }}>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className="flex items-center w-full py-8">
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
