export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const menuItems = [{ href: "#about", description: "About Me" }, {href: "#web-apps", description: "Web Apps"}, {href: "#skills", description: "Skills"}, { href: "#hire-me", description: "Hire me"}];

export const appInfo = [ 

{name: "Methodist Hospital Jacket Order Form", site: "https://mob-orders.herokuapp.com/", image: "assets/imgs/mob.png", description: "Web app that I built for my wife to keep track of jacket orders for the various departments of her hospital. App contains admin and user login/permissions and data reports. Integrates with Strip API for easy transactions and record keeping.", github: "https://github.com/BigPhatNerd/moab_orders", gitIcon: "assets/imgs/GitHub-Mark-64px.png", signOff: "Check out my code"},

];

export const rowTwo = ["assets/imgs/github.png","assets/imgs/rubocop.png","assets/imgs/trello.png","assets/imgs/slack.png","assets/imgs/codeship.png"];
export const rowThree = ["assets/imgs/1.png","assets/imgs/2.png","assets/imgs/3.png","assets/imgs/4.png","assets/imgs/5.png"];
export const rowOne = ["assets/imgs/react.png", "assets/imgs/express.png", "assets/imgs/mongodb.png", "assets/imgs/node.png"]

// export default {
// 	menuItems,
// 	appInfo,
// 	rowOne

// }