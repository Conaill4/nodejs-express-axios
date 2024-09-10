import express from "express";

let numClicked = 0;
let fieldClicked = "";
let sort = "ASC";

export const postSort = async (req: express.Request, res: express.Response): Promise<void> => {
    const fieldName = req.body.fieldName;


    if (fieldClicked != fieldName) {
        numClicked = 0;
    }

    switch (fieldName) {
        case 'roleName':
            checkNumClicked(req, res, fieldName);
            break;

        case 'location':
            checkNumClicked(req, res, fieldName);
            break;

        case 'capabilityName':
            checkNumClicked(req, res, fieldName);
            break;

        case 'bandName':
            checkNumClicked(req, res, fieldName);
            break;

        case 'closingDate':
            checkNumClicked(req, res, fieldName);
            break;
    }
}

export const checkNumClicked = async (req: express.Request, res: express.Response, fieldName: string): Promise<void> => {
    if (numClicked === 0) {
        numClicked++;
        sort = "ASC";
    }
    else if (numClicked === 1) {
        numClicked++;
        sort = "DESC";
    }
    else {
        numClicked = 0;
        fieldName = "jobRoleId";
        sort = "ASC";
    }
    fieldClicked = fieldName;
    res.redirect("/job-roles?fieldName=" + fieldName + "&orderBy=" + sort + "&page={{ Pagination.currentPage }}&pageSize=10'");
}