package br.com.brn.dsdeliver.repositories;

import br.com.brn.dsdeliver.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    /*
     * @author BRUN on 06/01/2021
     */
    @Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products" +
            " WHERE obj.status = 0 ORDER BY obj.moment ASC ")
    List<Order> findOrdersWithProducts();

}
