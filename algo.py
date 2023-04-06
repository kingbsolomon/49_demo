def starPrint(n):
    stairs = [("#" * i).rjust(n," ") for i in range(1,n+1) ]
    print(*stairs, sep="\n")

starPrint(5)

print("*" * 10)