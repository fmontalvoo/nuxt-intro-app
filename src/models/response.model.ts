export interface Fact {
    status:    Status;
    _id:       string;
    user:      string;
    text:      string;
    __v:       number;
    source:    string;
    updatedAt: Date;
    type:      string;
    createdAt: Date;
    deleted:   boolean;
    used:      boolean;
}

export interface Status {
    verified:  boolean;
    feedback?: string;
    sentCount: number;
}