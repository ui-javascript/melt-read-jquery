package space.qmen.lot.entity.rbac;

import lombok.Data;

import java.sql.Date;

@Data
public class Resource {
    private Long id;
    private String resourceName;
    private String description;
    private Date gmtCreate;
    private Date gmtModified;
    private Integer isDeleted;
}