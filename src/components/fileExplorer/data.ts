import { DirectoryType, FileElType } from "./file.type";

const data: (DirectoryType | FileElType)[] = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    childrenArr: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    childrenArr: [
      {
        id: 6,
        name: "unnamed.txt",
      },
      {
        id: 7,
        name: "Misc",
        childrenArr: [
          {
            id: 8,
            name: "foo.txt",
          },
          {
            id: 9,
            name: "bar.txt",
          },
        ],
      },
    ],
  },
];
export default data;
