// Get all elements with the specified classes
const elements = document.querySelectorAll('.messageContent-2t3eCI, .channelName-3KPsGw, .name-3Uvkvr, .username-vAneIW, .channel-3prF2u, .membersGroup-2eiWxl, .username-3_PJ5r, .activityText-1rR-8O, .title-17SveM, .subtext-2HDqJ7, .title-338goq, .overflow-1wOqNV, .name-28HaxV, .botText-1fD6Qk, .defaultColor-1EVLSt, .item-3mHhwr, .username-Qpc78p, .text-MPIeXO, .activityText-ev7Z1T, .searchBarComponent-3N7dCG, .name-2m3Cms, .textContent-TsKzji, .title-x4dI75, .headerText-1qIDDT, .liveShapeRound-2Tgi2d, .subtext-14b69p, .text-3S7XCz, .username-h_Y3Us ');

// Set the replacement text
const replacementText = 'wake up';

// Loop through each element and replace the inner text content
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.innerText = replacementText;
}
