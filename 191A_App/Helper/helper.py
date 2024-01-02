import os

'''
#Insert Mappings


0 - tabN
1 - ../tabN/tabN.module
2 - TabNPage
3 - ./tabN.page
4 - TabNPageRoutingModule
5 - ./tabN-routing.module
6 - TabNPageModule
7 - Tab N
8 - app-tabN
9 - tabN.page.html
10 - tabN.page.scss
'''

def Insert0(name):
    return name

def Insert1(name):
    return "../{0}/{0}.module".format(name)

def Insert2(name):
    return "{0}Page".format(name)

def Insert3(name):
    return "./{0}.page".format(name)

def Insert4(name):
    return "{0}PageRoutingModule".format(name)

def Insert5(name):
    return "./{0}-routing.module".format(name)

def Insert6(name):
    return "{0}PageModule".format(name)

def Insert7(name):
    return name

def Insert8(name):
    return "app-{0}".format(name)

def Insert9(name):
    return "{0}.page.html".format(name)

def Insert10(name):
    return "{0}.page.scss".format(name)

iDict = {
    "Insert0" : Insert0,
    "Insert1" : Insert1,
    "Insert2" : Insert2,
    "Insert3" : Insert3,
    "Insert4" : Insert4,
    "Insert5" : Insert5,
    "Insert6" : Insert6,
    "Insert7" : Insert7,
    "Insert8" : Insert8,
    "Insert9" : Insert9,
    "Insert10" : Insert10
}

iDictKeys = iDict.keys()

def generateTab(name):
    os.mkdir(os.getcwd() + "/" + "Output" + "/" + name)
    for file in os.listdir():
        if file.endswith(".txt"):
            with open(file, "r") as inputFile:
                if file == "tabs-routing.module.ts.txt":
                    tabsOutput = ""
                    for line in inputFile:
                        for key in iDictKeys:
                            if key in line:
                                line = line.replace(key, iDict[key](name))
                        tabsOutput += (line + "\n")
                    print(tabsOutput)

                else:
                    #Creating outputFile Name.
                    #print(file)
                    fList = file.split(".")
                    if "-" in fList[0]:
                        file = "{0}-{1}.{2}".format(name, fList[0].split("-")[1], ".".join(fList[1:-1]))
                    else:
                        file = "{0}.{1}".format(name, ".".join(fList[1:-1]))
                    #print("\t" + file)
                    with open("Output/{0}/{1}".format(name, file), "w") as outputFile:
                        for line in inputFile:
                            for key in iDictKeys:
                                if key in line:
                                    line = line.replace(key, iDict[key](name))
                            outputFile.writelines(line)


'''
Delete
def printTabCode(compName):
    pass

def generateModule(compName):
    pass

def generateRoutingModule(compName):
    pass

def generatePage(compName):
    pass

def generateSpec(compName):
    pass

def generateHtml(compName):
    with open("{0}.page.html".format(compName), "w") as outputFile:
        with open("htmlTemplate.txt", "r") as inputFile:
            for line in inputFile:
                if "Replace0" in line:
                    line = line.split("Replace0")
                    line = "{0} {1} {2}".format(line[0], compName, line[1])
                outputFile.write(line)


def generateTabCode(compName):
    pass
'''
    
if __name__ == "__main__":
    #Insert strings representing component names in components list!
    #components = []
    #for component in components:
    #    printTabCode(component)
    #    generateModule(component)
    #    generateRoutingModule(component)
    #    generatePage(component)
    #    generateSpec(component)
    #    generateHtml(component)
    #    generateTabCode(component)
    
    generateTab("Bob")

    #Once finished, component folders are placed under Helper > Output are ready as is
    # and can be dragged and dropped into src > app.
    print("\nFinished!")