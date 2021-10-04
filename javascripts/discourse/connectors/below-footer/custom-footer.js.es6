// Used instead of dasherize for backwards compatibility with stable
const getClassName = text => {
  return text.toLowerCase().replace(/\s/g, "-");
};

export default {
  setupComponent(args, component) {
    try {
      const splitSmallLinks = settings.Small_links.split("|").filter(Boolean);
      const splitSocialLinks = settings.Social_links.split("|").filter(Boolean);

      const smallLinksArray = [];
      const socialLinksArray = [];

      splitSocialLinks.forEach(link => {
        const fragments = link.split(",").map(fragment => fragment.trim());
        const text = fragments[0];
        const className = getClassName(text);
        const title = fragments[1];
        const href = fragments[2];
        const target = fragments[3] === "blank" ? "_blank" : "";
        const icon = fragments[4].toLowerCase();

        const socialLinkItem = {
          text,
          className,
          title,
          href,
          target,
          icon
        };
        socialLinksArray.push(socialLinkItem);
      });

      splitSmallLinks.forEach(link => {
        const fragments = link.split(",").map(fragment => fragment.trim());
        const text = fragments[0];
        const className = getClassName(text);
        const href = fragments[1];
        const target = fragments[2] === "blank" ? "_blank" : "";

        const smallLinkItem = {
          text,
          className,
          href,
          target
        };
        smallLinksArray.push(smallLinkItem);
      });

      this.setProperties({
        mainHeading: settings.Heading,
        blurb: settings.Blurb,
        // linkSections: sectionsArray,
        smallLinks: smallLinksArray,
        socialLinks: socialLinksArray,
				logoURL: settings.Logo
      });
    } catch (error) {
      console.error(error);
      console.error(
        "There's an issue in the Sharewoods Footer Component. Check if your settings are entered correctly"
      );
    }
  }
};
