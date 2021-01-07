package br.com.brn.dsdeliver.repositories;

import br.com.brn.dsdeliver.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

    /*
     * @author BRUN on 06/01/2021
     */

}
