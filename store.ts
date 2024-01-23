interface IMatterportLinks {
  url: string;
  key: string;
}

export const MatterportLinks: IMatterportLinks[] = [
  { url: "https://my.matterport.com/show/?m=8fcAc1q2PfF", key: "1" },
  { url: "https://my.matterport.com/show/?m=E5AThyQ6Bpa", key: "2" },
  { url: "https://my.matterport.com/show/?m=nbcLMnEfPtF", key: "3" },
  { url: "https://my.matterport.com/show/?m=U2PwbfTthfq", key: "4" },
];

export interface INavBarLinks {
  name: string;
  path: string;
}

export const NavBarLinks: INavBarLinks[] = [
  { name: "virtual tours", path: "virtualTours" },
  { name: "gallery", path: "gallery" },
  { name: "pricing", path: "pricing" },
  { name: "contact", path: "contact" },
];
