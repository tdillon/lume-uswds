import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(sass({ includes: 'node_modules/@uswds/uswds/packages/' }));

export default site;
