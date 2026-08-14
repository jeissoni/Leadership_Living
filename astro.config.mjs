import { defineConfig } from "astro/config";

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Leadership_Living";
const isUserSite = Boolean(
  owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`,
);

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : "http://localhost:4321",
  base: owner && !isUserSite ? `/${repo}/` : "/",
  trailingSlash: "always",
  output: "static",
});
