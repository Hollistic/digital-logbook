import math

Charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*."

password ="hello vro"
password2 = "hello bro"
password3 = "vrood"
password4 = "vriod"


def encrypt(passphrase):
    if len(passphrase) < 5:
        print("ur password it too short little vro")
    else:
        phraselen = len(passphrase)

        ciphactor_index = math.floor(phraselen/2)
        ciphactor_1 = Charlist.find(passphrase[ciphactor_index])
        ciphactor_2 = 0

        for char in passphrase:
            ciphactor_2 += Charlist.find(char)

        ciphactor_2 = ciphactor_2 % ciphactor_1
        ciphered = ""

        for char in passphrase:
            ciphered += str(ciphactor_1 * (abs(Charlist.find(passphrase[phraselen - 1 - passphrase.find(char)])- ciphactor_2)))
        return ciphered

print(encrypt(password))
print(encrypt(password2))
print(encrypt(password3))
print(encrypt(password4))
