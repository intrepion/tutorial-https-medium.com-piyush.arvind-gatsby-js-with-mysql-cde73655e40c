CREATE TABLE customers (
    CustomerID VARCHAR(255) NOT NULL,
    CompanyName VARCHAR(255),
    ContactName VARCHAR(255),
    ContactTitle VARCHAR(255),
    Address VARCHAR(255),
    PRIMARY KEY (CustomerID)
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'ALFKI',
    'Alfreds Futterkiste',
    'Maria Anders',
    'Sales Representative',
    'Obere Str. 57'
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'ANATR',
    'Ana Trujillo Emparedados y helados',
    'Ana Trujillo',
    'Owner',
    'Avda. de la Constitucin 2222'
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'ANTON',
    'Antonio Moreno Taquera',
    'Antonio Moreno',
    'Owner',
    'Mataderos 2312'
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'AROUT',
    'Around the Horn',
    'Thomas Hardy',
    'Sales Representative',
    '120 Hanover Sq.'
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'BERGS',
    'Berglunds snabbkp',
    'Christina Berglund',
    'Order Administrator',
    'Berguvsvgen 8'
);

INSERT INTO customers (
    CustomerID,
    CompanyName,
    ContactName,
    ContactTitle,
    Address
) VALUES (
    'BLAUS',
    'Blauer See Delikatessen',
    'Hanna Moos',
    'Sales Representative',
    'Forsterstr. 57'
);

CREATE TABLE course_details (
    course_id VARCHAR(255) NOT NULL,
    PRIMARY KEY (course_id)
);
