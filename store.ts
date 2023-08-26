interface IMatterportLinks {
  url: string;
  key: string;
}

export const MatterportLinks: IMatterportLinks[] = [
  { url: "https://my.matterport.com/show/?m=neU544GhH9U", key: "1" },
  { url: "https://my.matterport.com/show/?m=E5AThyQ6Bpa", key: "2" },
  { url: "https://my.matterport.com/show/?m=nbcLMnEfPtF", key: "3" },
  { url: "https://my.matterport.com/show/?m=U2PwbfTthfq", key: "4" },
];

interface INavBarLinks {
  name: string;
  path: string;
}

export const NavBarLinks: INavBarLinks[] = [
  { name: "virtual tours", path: "virtualTours" },
  { name: "gallery", path: "gallery" },
  { name: "pricing", path: "pricing" },
  { name: "contact", path: "contact" },
];