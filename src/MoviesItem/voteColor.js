export default function voteColor(vote) {
  if (vote <= 3) return "#E90000";
  if (vote <= 5) return "#E97E00";
  if (vote <= 7) return "#E9D100";
  return "#66E900";
};