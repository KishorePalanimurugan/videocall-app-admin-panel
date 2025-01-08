const menuItems = [
    {
      id: "menu",
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "mdi-home-variant-outline",
      link: "/dashboard",
      badge: 3,
      badgecolor: "bg-primary",
    },
    {
      id: "multilevel",
      novidade: false,
      label: "Multi Level",
      icon: "mdi-share-variant-outline",
      link: "/#",
      subItems: [
        {
          id: "level1.1",
          label: "Level 1.1",
          link: "/#",
          parentId: "multilevel",
        },
        {
          id: "level1.2",
          label: "Level 1.2",
          link: "/#",
          parentId: "multilevel",
          subItems: [
            {
              id: "level2.1",
              label: "Level 2.1",
              link: "/#",
              parentId: "level1.2",
            },
            {
              id: "level2.2",
              label: "Level 2.2",
              link: "/#",
              parentId: "level1.2",
            },
          ],
        },
      ],
    },
  ];
  
  export { menuItems };
  