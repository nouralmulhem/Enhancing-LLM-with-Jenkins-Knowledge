export const chatHistory = [
  {
    id: 1,
    history: [
      `
      I've looked all over for this answer but cannot find it, as most of the answers are how to add JDK to Jenkins for usage within a test. I'm looking for how to ensure Jenkins itself is using OpenJDK 11 that I have installed and not the older JDK 8.
      I have checked the <code>Jenkins.xml</code> and it does point to OpenJDK 11 as well as the <code>%java_home%</code> and PATH in the system environment are pointed to the correct locations.
      When I check System Properties, I still see things related to Java 8 (<code>java.home</code>, <code>java.specification.version</code>, etc.)
      I have no idea where else it could be stored at to change this.
      `,
      `In your Jenkins UI select Manage Jenkins â†’ Status Information â†’ System Information (displayed as System Properties then; in Jenkins 2.289.3, at least) â†’ search for java.runtime.version or others to look for hints what's possibly going wrong.`,
    ],
  },
  {
    id: 2,
    history: [
      `
      pre-commit is a great tool and id like to incorporate it into jenkins pipelines just to make sure someone didn't try to skip it during committing to the repo.
      so my questions are:

      what are the best practices to initialize pre-commit? (just initialize it as i would in the repo? the website offers examples for some other CI integrations but not jenkins)
      how can i say to jenkins to stop the build if any of the tests performed by pre-commit fails? (exit code? which one would be <code>success</code> or <code>fail</code>?
      `,
      `
      as the docs indicate the best way to run <code>pre-commit</code> in a CI system is with <code>pre-commit run</code>, usually <code>pre-commit run --all-files --show-diff-on-failure</code>
      this will exit nonzero which should fail your pipeline as desired

      disclaimer: I'm the creator of pre-commit
      `,
    ],
  },
  {
    id: 3,
    history: [
      `
      what is Jenkins?
      `,
      `
      Jenkins is an open-source automation server widely used for continuous integration and continuous delivery (CI/CD). It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.

        Here are some key features of Jenkins:

        1. **Extensibility**: Jenkins has a large number of plugins available, which allows it to integrate with many other tools and services. This makes it highly customizable to suit various project needs.

        2. **Distributed Builds**: Jenkins can distribute build/test loads to multiple machines, making it highly scalable.

        3. **Easy Installation and Configuration**: Jenkins can be installed easily on various platforms and can be configured via its web interface.

        4. **Pipeline as Code**: Jenkins supports defining pipelines as code using a domain-specific language (DSL) and storing them in a version control system (like Git). This is known as "Jenkins Pipeline" or "Pipeline as Code".

        5. **Active Community**: Being open-source, Jenkins has a large, active community contributing to its development and providing support.

        6. **Extensive Plugin Ecosystem**: Jenkins' functionality can be extended through plugins, which cover a wide range of purposes from source code management, build tools, and testing, to notifications and user interfaces.

        Jenkins is used by many organizations to automate their development processes, ensuring faster and more reliable software delivery.
        `,
    ],
  },
];
