export const highlightMenu = (view, refArray) => {
  refArray[view.num].current.style.backgroundColor = 'var(--theme)'
  refArray[view.num].current.style.color = 'var(--neutral)'
}