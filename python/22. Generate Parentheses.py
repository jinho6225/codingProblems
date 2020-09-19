class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        lst = []
        def helper(str, open, close):
            if open > close:
                return
            if open == 0 and close == 0:
                lst.append(str)
                return
            if open > 0:
                helper(str+"(", open-1, close)
            if close > 0:
                helper(str+")", open, close-1)
        helper('', n, n)
        return lst