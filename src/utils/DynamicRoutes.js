const { join } = require("path") 
const { readdirSync, writeFileSync } =  require("fs") 
const { AdminRoot } = require("../layouts/AdminRoot/IndexPage.vue")
console.log(AdminRoot);

function mergeList(nameList, pathList, absoluteList) {
    const length = nameList.length
    const merged = []
    for(let i = 0; i < length; i++) {
        merged.push({
            path: pathList[i],
            name: nameList[i],
            component: nameList[i],
            absolute: join(absoluteList[i])
        })
    }
    return merged
}

function getNameList(dirs) {
    const filteredDirs = dirs.filter(dir => {
        if(dir !== "IndexPage.vue"){
            return dir
        } 
    }).map(dir => {
        return dir.replace(".vue", "")
    })
    return filteredDirs
}

function getPathList(prefix, nameList) {
    return nameList.map(name => {
        return prefix + name
    })
}

function getAbsoluteList(absolute, dirs) {
    return dirs.filter(dir => {
        return dir !== "IndexPage.vue"
    }).map(dir => {
        return join(absolute, dir)
    })
}

function DynamicRoutes(absolute = join(__dirname, "../layouts"),prefix = "/",) {
    const dirs = readdirSync(absolute)?readdirSync(absolute):[]
    if(dirs?.length == 0) return;
    const nameList =  getNameList(dirs)
    const pathList =  getPathList(prefix, nameList)
    const absoluteList = getAbsoluteList(absolute, dirs)
    
    const children = []
    const merged = mergeList(nameList, pathList, absoluteList)

    for(let i = 0; i < absoluteList.length; i++) {
        if(absoluteList[i].includes(".vue")) {
            children.push(merged[i])
        } else {
            children.push({
                path: pathList[i],
                name: nameList[i],
                component: nameList[i],
                absolute: join(absoluteList[i], "IndexPage.vue"),
                children: DynamicRoutes(absoluteList[i], "")
            })
        }
    }
    return children
}

const path = join(__dirname, "../assets/routes.json")
const data = JSON.stringify(DynamicRoutes(), null, 2)


writeFileSync(path, data)