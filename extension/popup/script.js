/** @type HTMLTextAreaElement */
const textarea = document.querySelector("#textarea")

textarea.addEventListener("input", (e) => {
  if (e.metaKey || e.ctrlKey) {
    return
  }

  let chr = e.data

  const new_chr = transliterate(chr)
  if (!new_chr) {
    return
  }
  const pos = getCaretPos()
  const text = textarea.value
  textarea.value = text.substring(0, pos - 1) + new_chr + text.substring(pos)
}, {
  passive: true
})

window.addEventListener("load", function () {
  textarea.focus()
})

function transliterate(chr) {
  const map = [
    ["'", "\'"],
    ["a", "ا"],
    ["b", "ب"],
    ["p", "پ"],
    ["t", "ت"],
    ["F", "ث"],
    ["j", "ج"],
    ["H", "ح"],
    ["x", "خ"],
    ["d", "د"],
    ["²", "ذ"],
    ["v", "ذ"],
    ["r", "ر"],
    ["z", "ز"],
    ["s", "س"],
    ["\"", "ش"],
    ["e", "أ"],
    ["S", "ص"],
    ["D", "ض"],
    ["T", "ط"],
    ["Z", "ظ"],
    ["g", "ع"],
    ["G", "غ"],
    ["f", "ف"],
    ["q", "ق"],
    ["k", "ك"],
    ["l", "ل"],
    ["m", "م"],
    ["n", "ن"],
    ["h", "ه"],
    ["Q", "ة"],
    ["w", "و"],
    ["y", "ي"],
    ["i", "إ"],
    ["-", "ء"],
    ["o", "ؤ"],
    ["u", "ئ"],
    ["I", "إ"],
    ["Y", "ى"],
    ["A", "آ"],
    ["_", "ـ"],
    ["?", "؟"],
    [";", "؛"],
    [",", "،"],
  ]

  const replacement = map.find(([find]) => find === chr)

  if (replacement) {
    return replacement[1]
  }

  return null
}

function getCaretPos() {
  return textarea.selectionStart
}
