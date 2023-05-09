import Border from "./border.js";

import Div from "./child.js";

function AppBorder() {
  return (
    <>
      <Border>
        <Div />
      </Border>

      <Border>
        <Div />
        <Div />
      </Border>
    </>
  );
}

export default AppBorder;
