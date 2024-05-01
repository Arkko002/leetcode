function generateParenthesis(n: number): string[] {
	const parenthesis: string = `${"(".repeat(n)}${")".repeat(n)}`;
	const permutations: string[] = [];
	permute(parenthesis, 0, parenthesis.length - 1, permutations);

}
function permute(str: string, l: number, r: number, permutations: string[]): string[] {
	if (l == r)
		permutations.push(str)
	else {
		for (let i = l; i <= r; i++) {
			str = swap(str, l, i);
			permute(str, l + 1, r, permutations);
			str = swap(str, l, i);
		}
	}
}

function swap(a: string, i: number, j: number) {
	let temp;
	let charArray = a.split("");
	temp = charArray[i];
	charArray[i] = charArray[j];
	charArray[j] = temp;
	return (charArray).join("");
}

function generateParenthesis2(n: number): string[] {
	const length_max = n * 2;

}

const generatePermutation = (
	depth: number,
	stack: string[],
	nextParenthesis: string,
): string => {
	if (nextParenthesis === "(") stack.push(nextParenthesis);
	else if (nextParenthesis === ")") {
	}
};

const isValidParenthesisStack = (stack: string[]): boolean {

}
