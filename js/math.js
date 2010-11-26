// $.extend(Math.prototype, {
//   offsetX: function(angle, radius) {
//     return Math.sin(angle / 180 * Math.PI) * radius;
//   },
//   offsetY: function(angle, radius) {
//     return Math.cos(angle / 180 * Math.PI) * radius;
//   }
// });

if (Math.offsetX==null) Math.offsetX = function(angle, radius) {
  return Math.sin(angle / 180 * Math.PI) * radius;
};

if (Math.offsetY==null) Math.offsetY = function(angle, radius) {
  return Math.cos(angle / 180 * Math.PI) * radius;
};