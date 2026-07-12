import Welcome from "../../../bpl-tools/Admin/Welcome";
import BlocksCard from "../../../bpl-tools/Admin/Blocks/Card";

import { welcomeInfo } from "../utils/data";

// The canonical Welcome page (hero, getting-started, changelog, pro-ads) with the
// Blocks card slotted directly beneath the banner/getting-started row via afterHero.
const WelcomePage = (props) => {
  const { adminUrl, blocksProps = {} } = props;

  return (
    <Welcome
      {...props}
      {...welcomeInfo(adminUrl)}
      afterHero={
        <BlocksCard
          {...props}
          {...blocksProps}
          cardTitle="Blocks"
          seeAllLink="#/blocks"
        />
      }
    />
  );
};

export default WelcomePage;
