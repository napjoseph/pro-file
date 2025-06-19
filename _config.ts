import lume from "lume/mod.ts";
import icons from "lume/plugins/icons.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();

site.use(icons());
site.use(tailwindcss());
site.use(postcss());
site.use(favicon());
site.use(inline());

site.add("style.css");

export default site;
