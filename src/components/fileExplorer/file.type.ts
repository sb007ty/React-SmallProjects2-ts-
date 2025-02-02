export interface DirectoryType {
  id: number;
  name: string;
  childrenArr: (DirectoryType | FileElType)[];
}
export interface FileElType {
  id: number;
  name: string;
}
