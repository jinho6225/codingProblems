'''
680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Example 3:
input: "uvmthjvgjwhbtgairqxfagviertrvnqsmiohthvtpiykdyezewcekbznxyzwekrgnstwgdgaopvsgttntwvfaeorhmsstcilpiyjiutsiwwqeqgscxpcwfkforowqqvduassrzrjeicmfvfhfvjayupewgwzspwbnhjnaworvydvxefezxnerufgzsoymuyaaygccqirlzjvyusvbbotsmlxycoftedddtletrsrydxgeuymlmmcmfxwuwiazrgcybvbvidyoozvcekobwkkqoomeorcbxlzqydmmtmhvaozphkphfqdpvsycpzyoaysvfwmceynifnptmdzmxdfhjgykuzixkgxaguhvlsieaztozpzhvolywyrepqgrfpioausydostncbifqxambskirvcvdrzycxzibylyjqhttvcswjzbxasyscpikoydhvzuvyenioqxdgjqwdnpwamuldkbmvqfifoqzcrakzajkoybnblyakbnoaoolhjrjqybzqbitenhezrkxcbpvdxriwxdhmnelgbzkkpzbkkbeogkmihnreuxoepuvcrohunscztpuuzzxgfqohyyqgpfvhqtjlplvttintopkmdxzijxjzeirgmlfydilsqrhnpnvndtpwvjqiqpadqrkbdbgmxltowsulsifjeytrvadodlrqjqkqmhdfzjnycmhamnhnvoestquzqsdigkqutggfvmmnmmbcljqpdqretrgiqbaegkfvwcoepsmquveegoeflblylpbxeqqalpnuzbejrtbzftiaamblqbnmgfntyeygdobjwzlkxgvjbtfevovxpdhtobynfjpbwzpyblxgnngabhdxsozyfbvyptngbulzbyfhzmmorsvtjzwasysfnbnhotogetzkxfmtmrxeeijgkmckgsdazllkdygfakmcggghbrofvccglkhtbfqkvxjqbomxzkrlpztostdngxubecdftpovtpe"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
'''

class Solution:
    def validPalindrome(self, s: str) -> bool:        
        """
        "e b c bb ececabbacec bb c b e"
                
        """
        start = 0
        end = len(s)-1
        while start < end:
            if s[start] == s[end]:
                start += 1
                end -= 1
            else:
                return self.isPalindrome(s, start, end-1) or self.isPalindrome(s, start+1, end)           
        return True
    
    
    def isPalindrome(self, s: str, start: int, end: int) -> bool:
        while start < end:
            if s[start] != s[end]:
                return False
            start +=1 
            end -=1
            
        return True