function sortMyString(S) {
    splitString = S.split("");
    evenString = splitString.filter((e,i) => !(i & 1)).join("");
    oddString = splitString.filter((e,i) => i & 1).join("");
    return(`${evenString} ${oddString}`);
}