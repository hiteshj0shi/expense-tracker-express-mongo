# Database design Mongo

### User Collection
```
{
    id: ObjectId(),
    name: string,
    email: string,
    phoneNumber: string,
    avatar: string,
    createdAt: string,
    updatedAt: string
}
```

### Group Collection
```
{
    id: ObjectId,
    name: string,
    description: string,
    users: [ObjectId],
    icon: string,
    createdAt: string,
    updatedAt: string
}
```

### Expense Collection
Strategy can be `Equal, UnEqual, Shares, Percentage`
```
{
    id: ObjectId,
    groupId: ObjectId,
    totalAmount: Number,
    createdAt: string,
    updatedAt: string,
    payers: [{
        userId: ObjectId,
        amount: Number
    }],
    payees: [{
        userId: ObjectId,
        amount: Number
    }],
    strategy: string
}
```