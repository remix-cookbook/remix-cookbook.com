interface BlockContentItem {
  _id: string;
}

export function filterDataToSingleItem(data: BlockContentItem[] = [], preview = false) {
  if (preview) {
    return data.find(item => item._id.startsWith(`drafts.`)) || data[0];
  }

  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  return data[0];
}
