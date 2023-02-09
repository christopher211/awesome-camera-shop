import Tag from "../models/Tag.js";

const tagData = [
  {
    tag_name: "DSLR",
  },
  {
    tag_name: "Mirrorless",
  },
  {
    tag_name: "Point and Shoot",
  },
  {
    tag_name: "Full Frame",
  },
  {
    tag_name: "Compact",
  },
  {
    tag_name: "Binoculars",
  },
  {
    tag_name: "Telescopes",
  },
  {
    tag_name: "Tripods",
  },
  {
    tag_name: "Bags",
  },
  {
    tag_name: "Filters",
  },
  {
    tag_name: "Hoods",
  },
  {
    tag_name: "Caps",
  },
  {
    tag_name: "Memory Cards",
  },
  {
    tag_name: "Batteries",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

export default seedTags;
