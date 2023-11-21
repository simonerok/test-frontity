const settings = {
  name: "test-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "child-theme-test",
      /*  name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/landingpage/"],
            ["Travel", "/booking/"],
            ["Japan", "/om-os/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      }, */
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://lauraskovsted.dk/kea/afsluttende_eksamen",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
