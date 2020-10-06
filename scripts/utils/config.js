const docsConfig = {
    temp: "githubRepo", // Name of temporary folder, will be deleted after build
    repository: "secureCodeBox/secureCodeBox-v2", // The repository url without the github part of the link
    targetPath: "docs", // This needs to be 'docs' for the docusaurus build, but you may specify a 'docs/<subdirectory>'
    srcDirs: ["scanners", "hooks"], // Directory names, relative to the root directory of the github project, containing the subdirectories with documentation
    sizeLimit: 500000, // Limit of file size, most importantly used for large findings.
    findingsDir: "public/findings", // Directory for large findings which exceeded sizeLimit
  },
  integrationsConfig = {
    targetFile: "src/integrations.js", // Name of the target file to (over-)write
    integrationDirs: ["hooks", "scanners"], // Names of the directories relative to the root level of the `/docs` folder
    defaultIcon: "img/integrationIcons/Default.svg", // Default Icon when no imageUrl provided or could not resolve imageUrl
  },
  sidebarConfig = {
    sidebarName: "sidebars.json",
    // Sidebar gets merged with the entries autogenerated from the docs config listed above.
    sidebar: {
      "Getting Started": [
        "getting-started/installation",
        "getting-started/first-scans",
      ],
      "User Guide": [
        "user-guide/automatically-repeating-scans",
        "user-guide/scanning-networks",
        "user-guide/scanning-web-applications",
      ],
      "Developer Guide": [
        "developer-guide/integrating-a-scanner",
        "developer-guide/integrating-a-hook",
        "developer-guide/operator",
        "developer-guide/conventions",
      ],
    }, // If you need more than one sidebar, you might change the "root object" on which to build the sidebar on
  };

module.exports = {
  docsConfig,
  integrationsConfig,
  sidebarConfig,
};
